import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Local Truck Driver Jobs Near Me
        </h1>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Local Truck Driver Jobs Near Me is a job board connecting CDL drivers with trucking companies. We list Local, Regional, and OTR positions with competitive pay, making it easy for drivers to find their next opportunity and for companies to find qualified drivers.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">How do I find truck driving jobs in my area?</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Simply enter your ZIP code to see all available trucking positions near you. Our platform shows jobs from multiple companies, including local routes, regional hauls, and OTR positions, with detailed information about pay, requirements, and benefits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">What's the typical pay for truck driving jobs?</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Pay varies by position type and experience. Local drivers typically earn $50,000-$75,000 annually, while OTR positions often offer $65,000-$100,000+ per year. Many positions also include benefits like health insurance, 401(k), and sign-on bonuses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">How do I apply for trucking jobs?</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Each job listing has an "Apply Now" button that connects you directly with the hiring company. Most positions require a valid CDL-A license, clean driving record, and may have specific experience requirements. Applications typically take less than 30-60 minutes to complete.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">How can companies post truck driving jobs?</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Companies can post job listings for $150/month. Each posting includes:
                </p>
                <ul className="list-disc pl-6 mt-2 text-lg text-gray-600">
                  <li>Real-time tracking of views and clicks</li>
                  <li>Featured placement options</li>
                  <li>Company profile page</li>
                  <li>Direct applicant contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-900">
              Ready to Find Your Next Driving Job?
            </p>
            <p className="text-lg text-gray-600">
              Search available positions now or post a job to reach qualified drivers today.
            </p>
          </div>
        </div>

        <footer className="text-center mt-8 pt-8 border-t text-gray-500">
          © 2024 Local Truck Driver Jobs Near Me. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
