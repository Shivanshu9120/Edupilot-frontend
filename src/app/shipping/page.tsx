import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/sections/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Section className="py-12 md:py-16">
          <Container className="max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Digital Products</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    EduPilot primarily offers digital educational services and content. As such, most of our products are delivered electronically and do not require physical shipping. Digital products, including courses, subscriptions, and downloadable materials, are made available immediately upon purchase or as specified in the product description.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Physical Products</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For any physical products we may offer (such as certificates, merchandise, or educational materials), the following shipping terms apply:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Processing Time:</strong> Physical orders are typically processed within 3-5 business days</li>
                    <li><strong>Shipping Methods:</strong> We offer standard and express shipping options</li>
                    <li><strong>Shipping Costs:</strong> Shipping fees are calculated at checkout based on destination and selected method</li>
                    <li><strong>Delivery Time:</strong> Standard shipping typically takes 7-14 business days, express shipping takes 3-7 business days</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Shipping Destinations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We currently ship to the following regions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>United States and Canada</li>
                    <li>European Union countries</li>
                    <li>United Kingdom</li>
                    <li>Australia and New Zealand</li>
                    <li>Select countries in Asia (please contact us for availability)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    If your country is not listed, please contact us at shipping@edupilot.com to inquire about shipping options.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Shipping Costs</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Shipping costs vary based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Product weight and dimensions</li>
                    <li>Shipping destination</li>
                    <li>Selected shipping method (standard or express)</li>
                    <li>Any applicable taxes or customs duties</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    All shipping costs are displayed at checkout before you complete your purchase. Free shipping may be available for orders above a certain value, as specified in promotional materials.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Order Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Once your physical order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor your shipment&apos;s progress through our shipping partner&apos;s website or your account dashboard.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Delivery Issues</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you experience any issues with delivery:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Delayed Delivery:</strong> Contact us if your order hasn&apos;t arrived within the estimated delivery window</li>
                    <li><strong>Damaged Items:</strong> Report any damage within 48 hours of delivery with photos</li>
                    <li><strong>Lost Packages:</strong> If tracking shows delivery but you haven&apos;t received the package, contact us immediately</li>
                    <li><strong>Wrong Address:</strong> Ensure your shipping address is correct at checkout. We are not responsible for packages sent to incorrect addresses provided by you</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Customs and Import Duties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For international orders, you may be subject to import duties and taxes, which are levied once the package reaches your country. These charges are the customer&apos;s responsibility and are not included in the product price or shipping cost. We have no control over these charges and cannot predict what they may be.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Returns and Exchanges</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For physical products, please refer to our Cancellation & Refunds policy for information about returns and exchanges. Return shipping costs may apply unless the return is due to our error or a defective product.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about shipping, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Email: shipping@edupilot.com<br />
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

