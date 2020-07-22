import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import avatar from '../../../../assets/images/userImage.png'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }


  return (
    <div className={s.profileInfo}>
      <img className={s.avatar} src={!props.profile.photos.large ? avatar:props.profile.photos.large} />
      <div className={s.description}>
        <div>{props.profile.aboutMe}</div>
        <div className={s.fullName}>{props.profile.fullName}</div>
      </div>
    </div>
  );
};
export default ProfileInfo;
