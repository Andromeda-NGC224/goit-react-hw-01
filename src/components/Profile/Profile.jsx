import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
  <div className={css.box}>
                <img
                    className={css.photo}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.tag}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.number}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.number}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.number}>{stats.likes}</span>
    </li>
  </ul>
    </div>
   )
}

