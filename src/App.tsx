import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import CompanyLoginForm from './components/CompanyLoginForm';
import RegistrationPage from './pages/RegistrationPage';
import CompanyRegistrationPage from './pages/CompanyRegistrationPage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignDetailPage from './pages/CampaignDetailPage';
import CampaignManagementPage from './pages/CampaignManagementPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import EarningsPage from './pages/EarningsPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import RegistrationGuidePage from './pages/guide/RegistrationGuidePage';
import EarningsGuidePage from './pages/guide/EarningsGuidePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/company/login" element={<CompanyLoginForm />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/company/register" element={<CompanyRegistrationPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaigns/:id" element={<CampaignDetailPage />} />
            <Route path="/campaign-management" element={
              <PrivateRoute>
                <CampaignManagementPage />
              </PrivateRoute>
            } />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } />
            <Route path="/messages" element={
              <PrivateRoute>
                <MessagesPage />
              </PrivateRoute>
            } />
            <Route path="/messages/:chatId" element={
              <PrivateRoute>
                <MessagesPage />
              </PrivateRoute>
            } />
            <Route path="/earnings" element={
              <PrivateRoute>
                <EarningsPage />
              </PrivateRoute>
            } />
            <Route path="/settings" element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            } />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/guide/registration" element={<RegistrationGuidePage />} />
            <Route path="/guide/earnings" element={<EarningsGuidePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;