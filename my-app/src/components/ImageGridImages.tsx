import React from 'react';
import Image from 'next/image';

interface ImageGridImagesProps {
  imageAbout: string;
}

const ImageGridImages: React.FC<ImageGridImagesProps> = ({ imageAbout }) => {
  return (
    <div className='relative aspect-w-3 aspect-h-2'>
      <div className='absolute inset-0'>
        <Image src={imageAbout} alt='' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default ImageGridImages;
