import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/sections/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Section className="py-12 md:py-16">
          <Container className="max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using EduPilot, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily access the materials on EduPilot&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use the service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>In any way that violates any applicable national or international law or regulation</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                    <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                    <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The service and its original content, features, and functionality are and will remain the exclusive property of EduPilot and its licensors. The service is protected by copyright, trademark, and other laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you purchase a subscription or make a payment through our service, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide current, complete, and accurate purchase and account information</li>
                    <li>Promptly update your account and other information, including your email address and credit card numbers and expiration dates</li>
                    <li>Pay all charges incurred by your account</li>
                    <li>Be responsible for all applicable taxes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on EduPilot&apos;s website are provided on an &apos;as is&apos; basis. EduPilot makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall EduPilot or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EduPilot&apos;s website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Revisions</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    EduPilot may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Email: legal@edupilot.com<br />
                    Address: [Your Company Address]
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

