import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-xl font-bold">Mrudula Gattupalli</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Aspiring Software Developer | Ready to contribute to innovative tech solutions
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
              © 2025 Mrudula Gattupalli. Built with <Heart className="w-4 h-4 text-red-500" /> and lots of determination
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;