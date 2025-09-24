import React from 'react';

const MapSection = () => {
    return (
        <section className="bg-white" aria-label="Location and map information">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <figure className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                        <figcaption className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center" role="img" aria-label="Cizel company logo">
                                <span className="text-white font-bold">C</span>
                            </div>
                            <p className="text-gray-600">Cizel Inc.</p>
                            <p className="text-gray-600">Tech Beyond Limits Together</p>
                            <p className="text-gray-600">San Francisco, USA</p>
                        </figcaption>
                    </figure>

                    {/* Location Info */}
                    <article>
                        <header className="mb-6">
                            <p className="text-gray-600 mb-2">Our Location</p>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Connecting Near and Far
                            </h2>
                        </header>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-4">Headquarters</h3>
                            <address className="not-italic space-y-1 text-gray-600">
                                <p>Cizel Inc.</p>
                                <p>San Francisco, USA</p>
                                <p>123 Tech Boulevard, Suite 456</p>
                                <p>San Francisco, CA 12345</p>
                                <p>United States</p>
                            </address>
                        </section>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MapSection;