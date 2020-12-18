import React from 'react'
import victor from '../images/image-victor.jpg'
import banner from '../images/bg-pattern-card.svg'

const ProfileCard = ({data}) => {
    return(
        <div className="profileCard">
            <div className="profileBanner">
                <img src={banner} alt="banner"  />
                <div className="profilePicture">
                    <img src={victor} alt="profile-pic" />
                </div>
            </div>
            <div className="userInfo">
                <div className="nameAge">
                    <h4>{`${data.fname} ${data.lname}`}</h4>
                    <p>{data.age}</p>
                </div>
                <div className="city">
                    <p>{data.city}</p>
                </div>
            </div>

            <div className="userStats">
                <div className="followers">
                    <h5>{data.followers}</h5>
                    <h6>Followers</h6>
                </div>
                <div className="likes">
                    <h5>{data.likes}</h5>
                    <h6>Likes</h6>
                </div>
                <div className="photos">
                    <h5>{data.photos}</h5>
                    <h6>Photos</h6>
                </div>
            </div>

        </div>
    )
}

export default ProfileCard