import photo1 from '../../assets/parentsDay.jpg'
import photo2 from '../../assets/prizeDistributions.jpg'
import photo3 from '../../assets/runningShieldCompetition.jpg'
import photo4 from '../../assets/sportsDay.jpg'
import photo5 from '../../assets/classroom.jpg'
import photo6 from '../../assets/facility.jpg'
import photo7 from '../../assets/kalas.jpg'
import photo8 from '../../assets/praman.jpg'
import photo9 from '../../assets/cup.jpg'
import photo10 from '../../assets/aboutHero.jpg'
import photo11 from '../../assets/medal.jpg'
import photo12 from '../../assets/police.jpg'
import photo13 from '../../assets/people.jpg'

const GalleryHero = () => {
    return (
        <div className='min-h-screen px-[5%] mt-[130px]'>
        <h5 className="pt-12 heading">Gallery</h5>
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16 py-16">
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo1} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo2} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo3} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo4} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo5} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo6} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo7} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo8} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo9} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo10} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo11} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo12} alt="" />
                <img className='duration-300 rounded-xl brightness-75 hover:brightness-100' src={photo13} alt="" />
            </div>
        </div>
    )
}

export default GalleryHero