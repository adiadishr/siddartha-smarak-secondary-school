import photo1 from '../../assets/parentsDay.jpg'
import photo2 from '../../assets/prizeDistributions.jpg'
import photo3 from '../../assets/runningShieldCompetition.jpg'
import photo4 from '../../assets/sportsDay.jpg'

const GalleryHero = () => {
    return (
        <div className='min-h-screen px-[5%] mt-[130px]'>
        <h5 className="pt-12 heading">Gallery</h5>
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16 py-16">
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo1} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo2} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo3} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo4} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo1} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo2} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo3} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo4} alt="" />
            </div>
        </div>
    )
}

export default GalleryHero