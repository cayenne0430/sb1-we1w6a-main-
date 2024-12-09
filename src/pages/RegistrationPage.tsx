import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicInfoStep from '../components/registration/BasicInfoStep';
import PersonalInfoStep from '../components/registration/PersonalInfoStep';
import SnsInfoStep from '../components/registration/SnsInfoStep';
import WorkInfoStep from '../components/registration/WorkInfoStep';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Basic Info
    email: '',
    password: '',
    confirmPassword: '',
    publicName: '',

    // Personal Info
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    birthDate: '',
    gender: '',
    phoneNumber: '',
    postalCode: '',
    prefecture: '',
    city: '',
    address: '',
    buildingName: '',

    // SNS Info
    platforms: {
      instagram: { username: '', followers: 0 },
      youtube: { username: '', followers: 0 },
      tiktok: { username: '', followers: 0 },
      twitter: { username: '', followers: 0 }
    },
    categories: [],
    description: '',

    // Work Info
    pastWorks: [{ company: '', description: '', period: '' }],
    desiredFee: {
      post: 0,
      video: 0,
      live: 0,
      event: 0
    },
    workTypes: [],
    availableAreas: [],
    ngList: {
      products: [],
      companies: [],
      others: ''
    }
  });

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to submit registration
    console.log('Form submitted:', formData);
    navigate('/registration-complete');
  };

  const steps = [
    {
      title: '基本情報',
      description: 'アカウント情報'
    },
    {
      title: '個人情報',
      description: '本人確認情報'
    },
    {
      title: 'SNS情報',
      description: 'SNSアカウント連携'
    },
    {
      title: '案件情報',
      description: '案件に関する情報'
    }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInfoStep
            formData={formData}
            onChange={handleFieldChange}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            onChange={handleFieldChange}
            onNext={handleNext}
            onBack={handlePrevious}
          />
        );
      case 2:
        return (
          <SnsInfoStep
            formData={formData}
            onChange={handleFieldChange}
            onNext={handleNext}
            onBack={handlePrevious}
          />
        );
      case 3:
        return (
          <WorkInfoStep
            formData={formData}
            onChange={handleFieldChange}
            onSubmit={handleSubmit}
            onBack={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">インフルエンサー登録</h1>
          <p className="text-center text-gray-600 mb-8">
            VIPキャスティングで、あなたのキャリアをさらなる高みへ
          </p>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex-1 ${index !== steps.length - 1 ? 'relative' : ''}`}
                >
                  <div className="text-center">
                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                        index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="mt-2">
                      <div className="text-sm font-medium">{step.title}</div>
                      <div className="text-xs text-gray-500">{step.description}</div>
                    </div>
                  </div>
                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute top-4 w-full h-0.5 ${
                        index < currentStep ? 'bg-purple-600' : 'bg-gray-200'
                      }`}
                      style={{ left: '50%' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;