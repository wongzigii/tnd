import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Tap N Done"
    description="Make paying with crypto as easy as contactless card payment."
  >
    <VerticalFeatureRow
      title="Phone to Phone"
      description="Using NFC technology, we provide a handy and safe payment method for daily life using cryptocurrencies. You have the freedom to choose your favorite wallet and token to pay with. No 3rd party involved, no limits."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Pay and receive in second"
      description="Choose what to Pay or Receive, we will do the rest"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="No battery restrictions"
      description="No battery in your phone? No problem, Pay using a 100% crypto-based process, encrypting the transactions with your card."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };