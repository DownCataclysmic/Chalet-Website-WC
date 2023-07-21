import React from 'react'
import Hero from '../components/Hero'
import ImageGrid from '@/components/ImageGrid';

const about = () => {
  return (
    <div className="items-center">
      <Hero heading='About Us' message="If you don't like it then fuck off..."/>
      <h1 className='text-4xl font-bold text-center p-4'>About Us</h1>
      <p className="text-xl text-gray-600 px-20">
      Castleman Retreats is proud to be the custodian of a charming chalet with a rich history that spans over 50 years. This delightful abode is steeped in tradition, exuding a timeless allure that captivates all who enter. Every nook and cranny of the chalet is adorned with traditional Norfolk decoration, showcasing the region's distinctive aesthetic and heritage. From intricately carved wooden furniture to intricate tapestries and locally crafted artwork, the chalet is a treasure trove of traditional charm. Situated in Cromer, this idyllic retreat enjoys a coveted location, being just a stone's throw away from both the sun-kissed beach and the vibrant city center. With the soothing sounds of the waves in the background and the convenience of easy access to the heart of the city, Castleman Retreats offers a truly memorable and enchanting experience for all who visit.
      </p>
      <p className="text-xl text-gray-600 px-20 py-4">
      Nestled in the picturesque coastal town of Cromer, Castleman Retreats offers more than just a charming chalet with a rich history. It provides an unparalleled experience of tranquility and convenience. The chalet's close proximity to the beach allows guests to immerse themselves in the refreshing coastal ambiance, taking leisurely strolls along the sandy shores or indulging in water activities. Moreover, the bustling city center is just a short distance away, offering a myriad of shops, restaurants, and cultural attractions to explore. Whether seeking a peaceful retreat or a vibrant urban adventure, Castleman Retreats caters to diverse preferences, allowing guests to create unforgettable memories in a setting that seamlessly blends history, tradition, and coastal allure.
      </p>
      <ImageGrid />
      <p className="text-xl text-gray-600 px-20 py-4">
      Nestled in the picturesque coastal town of Cromer, Castleman Retreats offers more than just a charming chalet with a rich history. It provides an unparalleled experience of tranquility and convenience. The chalet's close proximity to the beach allows guests to immerse themselves in the refreshing coastal ambiance, taking leisurely strolls along the sandy shores or indulging in water activities. Moreover, the bustling city center is just a short distance away, offering a myriad of shops, restaurants, and cultural attractions to explore. Whether seeking a peaceful retreat or a vibrant urban adventure, Castleman Retreats caters to diverse preferences, allowing guests to create unforgettable memories in a setting that seamlessly blends history, tradition, and coastal allure.
      </p>
    </div>
  );
};

export default about