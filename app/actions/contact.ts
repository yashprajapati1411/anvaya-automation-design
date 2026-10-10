'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Please provide your full name (at least 2 characters).'),
  email: z.string().email('Please enter a valid business email address.'),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, 'Please select at least one service you are interested in.'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please share a brief note about your project (at least 10 characters).'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}

export async function submitContactAction(
  _prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  try {
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: (formData.get('company') as string) || undefined,
      services: formData.getAll('services') as string[],
      budget: (formData.get('budget') as string) || undefined,
      message: formData.get('message') as string,
    };

    const validated = contactSchema.safeParse(rawData);

    if (!validated.success) {
      const fieldErrors = validated.error.flatten().fieldErrors;
      return {
        success: false,
        message: 'Please review the highlighted fields below.',
        errors: fieldErrors,
      };
    }

    console.log('[Anvaya Contact Inquiry Received]', validated.data);

    // Simulate standard server latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: 'Thank you for reaching out. We will review your requirements and respond within 24 hours.',
    };
  } catch (error) {
    console.error('[Anvaya Contact Action Error]', error);
    return {
      success: false,
      message: 'An unexpected error occurred while transmitting your request. Please email us directly at contact@anvayaautomation.com.',
    };
  }
}
