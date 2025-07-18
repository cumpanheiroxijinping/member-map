import React, { useState } from 'react';
import { User, Mail, Calendar, Award, Settings, LogOut } from 'lucide-react';

const ProfileTab: React.FC = () => {
  const [user] = useState({
    name: 'John Smith',
    email: 'john.smith@email.com',
    joinDate: 'January 15, 2024',
    completedModules: 0,
    totalModules: 5
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Profile</h2>
          <p className="text-xl text-gray-600">
            Manage your information and track your progress
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
                  <p className="text-gray-600">Active Member</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Calendar className="text-blue-600 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Member since</p>
                    <p className="text-gray-600">{user.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Progress</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700 font-medium">Completed Modules</span>
                  <span className="text-blue-700 font-bold">{user.completedModules}/{user.totalModules}</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500" 
                    style={{ width: `${(user.completedModules / user.totalModules) * 100}%` }} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">0h</div>
                  <div className="text-sm text-gray-600">Study Time</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Complete Modules</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Certificates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <Award className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">My Certificates</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <Settings className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">Settings</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-red-50 rounded-lg transition-colors duration-200">
                  <LogOut className="text-red-600 mr-3" size={20} />
                  <span className="text-red-700">Sign Out</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Next Step</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Continue your journey by watching the first course module
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Continue Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;