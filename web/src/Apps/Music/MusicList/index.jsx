import styles from './MusicList.module.css'

export function MusicList(props) {

    function isSelected(music){
        return props.selectedMusic === music ? styles['selected'] : ''
    }

    ['music-list', ''].join(' ')

    return (
        <ul className={styles['music-list']}>
            {props.musics.map((music) => (
                <li key={music.id} className={[styles['music-list-item'], isSelected(music)].join(' ')}>
                    <div className={styles['information']} >
                        <span className={styles['title']}>{ music.name }</span>
                        <span className={styles['artist']}>{ music.artist}</span>
                        <span className={styles['time']}>{ music.time }</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}