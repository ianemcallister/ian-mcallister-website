// src/pages/TermsOfUse.js

import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="terms-container bg-gray-50 text-gray-800 p-8 lg:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Use</h1>

        <p className="text-gray-600 mb-4">
          Last updated: 11/6/24
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you are prohibited from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Our Service</h2>
          <p>
            You agree to use our website and services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage, disable, or impair the functionality of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>
            All content, including text, images, graphics, and logos, is the intellectual property of Ian McAllister and is protected by copyright and trademark laws. Unauthorized use of any content on our site may violate these laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. User-Generated Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the service. By posting content, you grant us a non-exclusive, royalty-free license to use, modify, and display your content in connection with the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Ian McAllister or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our service at our sole discretion, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            We may revise these Terms of Use at any time without prior notice. By using this website, you agree to be bound by the current version of these Terms of Use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United States of America, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at <a href="mailto:contact@yourdomain.com" className="text-blue-500 hover:underline">contact@yourdomain.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
