const RegistrationTest = ({ parameters }: any) => {

    const urlParams = new URLSearchParams(parameters);
    const entries = urlParams.entries();
    return (
        <div>
            parameters : {entries} // zmienić: hasło nie może być w url
        </div>
    )
}
export default RegistrationTest;