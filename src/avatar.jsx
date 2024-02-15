const Avatar = () => {
    let isTrue = false;
    return (
        <div className='w-72 h-72'>
            {isTrue ? (
                <img
                    src='../src/image/view.jpg'
                    alt='avatar'
                    className='w-full h-full rounded-full'
                />
            ) : null}
        </div>
    );
};
export default Avatar;
