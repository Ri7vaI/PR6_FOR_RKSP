import st from '../styles/Header.module.css'

function Header(){
    return(
        <header className={st.header}>
            <div>
                <img src='https://www.mirea.ru/upload/medialibrary/281/IIT_colour.jpg' />
            </div>

        </header>
    );
}
export default Header;