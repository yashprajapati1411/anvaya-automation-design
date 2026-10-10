import numpy as np
import subprocess
import math

def generate_video():
    width, height = 1280, 720
    fps = 30
    duration = 6.0 # 6 seconds seamless loop
    total_frames = int(fps * duration)
    
    # Coordinate grids
    y, x = np.mgrid[0:height, 0:width].astype(np.float32)
    # Normalized coordinates [-1, 1]
    nx = (x / width - 0.5) * 2.0
    ny = (y / height - 0.5) * 2.0
    r = np.sqrt(nx**2 + ny**2)
    angle = np.arctan2(ny, nx)
    
    # Base palette colors (RGB float 0-1)
    # Background: #F4F2EE (244, 242, 238)
    bg_color = np.array([244/255.0, 242/255.0, 238/255.0], dtype=np.float32)
    # Champagne: #C9B99A (201, 185, 154)
    champagne = np.array([201/255.0, 185/255.0, 154/255.0], dtype=np.float32)
    # Pearl highlight: #FFFFFF
    pearl = np.array([1.0, 1.0, 1.0], dtype=np.float32)
    # Soft warm shadow: #D8D0C2
    shadow = np.array([216/255.0, 208/255.0, 194/255.0], dtype=np.float32)

    # Start ffmpeg subprocess
    cmd = [
        'ffmpeg', '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{width}x{height}',
        '-pix_fmt', 'rgb24',
        '-r', str(fps),
        '-i', '-',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-crf', '20',
        '-preset', 'fast',
        '-movflags', '+faststart',
        'public/hero-ambient.mp4'
    ]
    
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    
    print(f"Rendering {total_frames} luxury ambient frames...")
    
    for i in range(total_frames):
        theta = (2.0 * math.pi * i) / total_frames
        sin_t = math.sin(theta)
        cos_t = math.cos(theta)
        
        # Smooth organic flowing caustics / fluid light
        # Wave 1: Gentle elliptical drift
        w1 = np.sin(nx * 2.2 + ny * 1.5 + sin_t * 1.2) * np.cos(ny * 2.0 - nx * 1.0 + cos_t * 1.2)
        
        # Wave 2: Radial breathing light pulse
        w2 = np.cos(r * 3.5 - theta) * np.exp(-r * 0.8)
        
        # Wave 3: Subtle diagonal light sweep
        w3 = np.sin((nx * 0.8 + ny * 1.2) * 2.5 + sin_t * 0.8 + cos_t * 0.8)
        
        # Combined luminous fluid intensity [0, 1]
        fluid = 0.5 + 0.3 * w1 + 0.25 * w2 + 0.15 * w3
        fluid = np.clip(fluid, 0.0, 1.0)
        
        # Soft radial vignette centered on canvas (leaving center luminous)
        center_glow = np.exp(-0.75 * (r ** 1.8))
        
        # Color composition:
        # Base ivory + champagne waves + pearl highlights on crests
        frame = np.empty((height, width, 3), dtype=np.float32)
        
        for c in range(3):
            # Base blend from shadow to background
            base = shadow[c] * (1.0 - fluid) + bg_color[c] * fluid
            # Add champagne radiance in the mid-tones
            champagne_rad = champagne[c] * np.sin(fluid * math.pi) * 0.45
            # Add luminous pearl highlights at the crests
            pearl_highlight = pearl[c] * (fluid ** 3.0) * 0.35 * center_glow
            frame[..., c] = base + champagne_rad + pearl_highlight

        # Clip and convert to uint8
        frame_u8 = np.clip(frame * 255.0, 0, 255).astype(np.uint8)
        proc.stdin.write(frame_u8.tobytes())
        
        if i % 30 == 0:
            print(f"Frame {i}/{total_frames} rendered")
            
    proc.stdin.close()
    proc.wait()
    print("Luxury ambient video rendered successfully to public/hero-ambient.mp4!")

if __name__ == '__main__':
    generate_video()
