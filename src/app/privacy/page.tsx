// src/pages/PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container bg-gray-50 text-gray-800 p-8 lg:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="text-gray-600 mb-4">
          Effective Date: 11/6/24
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Privacy Policy explains how Ian McAllister collects, uses, and discloses information about you when you use our website and services. By accessing or using our services, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>
            We collect various types of information to provide and improve our service to you. This includes:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>Personal Information:</strong> Information such as your name, email address, phone number, and other details you provide when creating an account or contacting us.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our services, such as IP addresses, browser type, and device identifiers.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to monitor activity on our service and hold certain information.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>
            We use the information we collect for purposes such as:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Providing, maintaining, and improving our services.</li>
            <li>Responding to your requests, questions, and feedback.</li>
            <li>Sending you technical notices, updates, security alerts, and support messages.</li>
            <li>Personalizing your experience and delivering relevant content.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except in the following situations:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>With your consent or at your direction.</li>
            <li>With service providers who perform services on our behalf (e.g., payment processors, analytics providers) and are obligated to keep your information secure.</li>
            <li>To comply with legal obligations or protect our rights and property.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We take reasonable measures to protect the information we collect from loss, theft, misuse, and unauthorized access. However, no method of transmission over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, update, or delete your data. Contact us at <a href="mailto:privacy@yourdomain.com" className="text-blue-500 hover:underline">privacy@yourdomain.com</a> to exercise these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p>
            Our service may contain links to third-party websites or services that are not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page. Please review this policy periodically for any updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@yourdomain.com" className="text-blue-500 hover:underline">privacy@yourdomain.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
