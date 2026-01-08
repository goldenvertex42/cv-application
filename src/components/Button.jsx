export default function Button({ type, disabled, children, onClick }) {
    return(
        <>
          <button type={type}
                  disabled={disabled}
                  onClick={onClick}>{children}</button>
        </>
    );
}