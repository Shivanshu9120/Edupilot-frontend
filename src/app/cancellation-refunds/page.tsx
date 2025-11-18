import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/sections/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export default function CancellationRefundsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Section className="py-12 md:py-16">
          <Container className="max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-4">Cancellation & Refunds</h1>
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Cancellation Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may cancel your subscription or service at any time. Cancellation requests can be made through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your account settings on the EduPilot platform</li>
                    <li>Email to support@edupilot.com</li>
                    <li>Contact form on our website</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Upon cancellation, your access to paid features will continue until the end of your current billing period. No partial refunds will be provided for the remaining period.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Refund Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We offer refunds under the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Within 7 days of purchase:</strong> Full refund for any subscription or course purchase made within the last 7 days, provided you have not accessed more than 20% of the course content.</li>
                    <li><strong>Technical issues:</strong> If you experience technical difficulties that prevent you from accessing the service and we are unable to resolve them within 48 hours, you may be eligible for a full or partial refund.</li>
                    <li><strong>Service discontinuation:</strong> If we discontinue a service you have purchased, you will receive a prorated refund for the unused portion.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Refund Process</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To request a refund:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li>Contact our support team at refunds@edupilot.com or through your account dashboard</li>
                    <li>Provide your order number and reason for the refund request</li>
                    <li>Our team will review your request within 5-7 business days</li>
                    <li>If approved, refunds will be processed to your original payment method within 10-14 business days</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Non-Refundable Items</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The following are not eligible for refunds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Subscriptions cancelled after the 7-day refund period</li>
                    <li>Courses where more than 20% of content has been accessed</li>
                    <li>Digital products that have been downloaded or accessed</li>
                    <li>Services that have been fully rendered</li>
                    <li>Gift cards or promotional credits</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription Cancellation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For subscription-based services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You can cancel your subscription at any time from your account settings</li>
                    <li>Cancellation takes effect at the end of your current billing cycle</li>
                    <li>You will continue to have access to all features until the end of your paid period</li>
                    <li>No refunds are provided for the unused portion of a subscription period after cancellation</li>
                    <li>Auto-renewal will be disabled upon cancellation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Chargebacks</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you initiate a chargeback or dispute a payment, your account may be suspended until the matter is resolved. We encourage you to contact us directly to resolve any payment issues before initiating a chargeback.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Refund Timeline</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Refund processing times:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Review period:</strong> 5-7 business days</li>
                    <li><strong>Processing time:</strong> 10-14 business days after approval</li>
                    <li><strong>Credit card refunds:</strong> May take 1-2 additional billing cycles to appear on your statement</li>
                    <li><strong>Bank transfers:</strong> May take 5-10 business days depending on your bank</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Special Circumstances</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In cases of medical emergencies, natural disasters, or other exceptional circumstances, we may consider refund requests on a case-by-case basis. Please contact our support team with documentation of your situation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about cancellations or refunds, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Email: refunds@edupilot.com<br />
                    Support: support@edupilot.com<br />
                    Phone: [Your Support Phone Number]
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

