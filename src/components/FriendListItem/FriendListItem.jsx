import css from "./FriendListItem.module.css"
import clsx from "clsx"


export default function FriendListItem({ image, name, isOnline, })
{
    return (
        <div className={css.container}>
  <img className={css.photo} src={image} alt="Avatar"  />
  <p className={css.name}>{name}</p>
  <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}