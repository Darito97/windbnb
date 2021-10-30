import './StayItem.css'
import StarIcon from "../../resources/Icons/StarIcon.svg";

const StayItem = ({ stay }) => {

    const { title, superHost, rating, type, beds, photo } = stay

    return (
        <article className='Stay'>
            <img className='imageStayItem' src={photo} alt="StayPhoto" />
            <div className='StayInfo'>

                {superHost ? <h4 className='SuperHost'>SUPER HOST</h4> : <></>}
                <p className='description'>{type}: {beds} beds</p>
                <div className='rating'>
                    <img className='StarIcon' src={StarIcon} alt="StarIcon" />
                    {rating}
                </div>
            </div>
            <h3 className='TitleStay'>{title}</h3>
        </article>
    )
}

export default StayItem
