import React from 'react';

/**
 * A reusable skeleton loading component with shimmer effect.
 * @param {object} props - The component props.
 * @param {string} props.className - Additional CSS classes to apply for custom sizing.
 */
function SkeletonCard({ className }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 rounded-lg ${className}`}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}

export default SkeletonCard;
