import React from 'react'
import ImageGridImages from './ImageGridImages'

function ImageGrid() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4'> 
            <ImageGridImages imageAbout={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353876100.jpg?k=a9a56426dccbdf6a1a997402efed27cd7394b5cca2e30366b4bf00f2239d180d&o=&hp=1'}/>
            <ImageGridImages imageAbout={'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cromer%2C_Church_St.JPG'}/>
            <ImageGridImages imageAbout={'https://www.explorenorfolkuk.co.uk/images/cromerjettyst2500.jpg'}/>
            <ImageGridImages imageAbout={'https://live.staticflickr.com/3938/15607854362_a7de4c2d23_b.jpg'}/>
        </div>
    </div>
  )
}

export default ImageGrid