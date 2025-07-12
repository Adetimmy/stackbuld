import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16 absolute bottom-0 w-full">
      <div className="container py-8">
        <div className="text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Stackbuld Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
