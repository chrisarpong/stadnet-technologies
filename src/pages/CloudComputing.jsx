import Hero from '../components/Hero';
import InteractiveServiceCards from '../components/InteractiveServiceCards';
import { FaCloudUploadAlt, FaNetworkWired, FaServer, FaShieldAlt, FaInfinity, FaMoneyBillWave } from 'react-icons/fa';
import './ServicePage.css';
import Breadcrumb from '../components/Breadcrumb';


const CloudComputing = () => {
    const features = [
        {
            title: 'Cloud Migration',
            description: 'Seamless transition of your infrastructure and applications to the cloud with minimal downtime.',
            icon: <FaCloudUploadAlt />
        },
        {
            title: 'Infrastructure Management',
            description: 'Comprehensive cloud infrastructure setup, monitoring, and optimization services.',
            icon: <FaNetworkWired />
        },
        {
            title: 'Serverless Architecture',
            description: 'Build and deploy applications without managing servers using AWS Lambda, Azure Functions, and more.',
            icon: <FaServer />
        },
        {
            title: 'Cloud Security',
            description: 'Enterprise-grade security measures to protect your data and applications in the cloud.',
            icon: <FaShieldAlt />
        },
        {
            title: 'DevOps & CI/CD',
            description: 'Automated deployment pipelines and continuous integration for faster, reliable releases.',
            icon: <FaInfinity />
        },
        {
            title: 'Cloud Cost Optimization',
            description: 'Reduce cloud spending while maintaining performance through intelligent resource management.',
            icon: <FaMoneyBillWave />
        }
    ];

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'Cloud Computing', path: '/cloud-computing' }
    ];

    return (
        <div className="service-page">
            <Breadcrumb items={breadcrumbItems} />

            <Hero
                title="Cloud Computing Solutions"
                subtitle="Harness the power of cloud technology for scalability and innovation"
                ctaText="Get Cloud Consultation"
                ctaLink="/contact"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="service-intro glass-light p-xl rounded-lg mb-xl">
                        <h2 className="text-gradient mb-md">Transform Your Infrastructure</h2>
                        <p>
                            Our cloud computing services help businesses leverage the full potential of cloud technology.
                            Whether you're looking to migrate existing systems or build cloud-native applications from scratch,
                            our experts provide end-to-end solutions tailored to your specific requirements.
                        </p>
                    </div>

                    <h3 className="section-title text-center mb-lg">Cloud Services</h3>
                    <InteractiveServiceCards services={features} />
                </div>
            </section>
        </div>
    );
};

export default CloudComputing;
