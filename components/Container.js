export default function Container({ className, children }) {
    let addClassName = className ? className : "";

    return (
        <div className={`container mx-auto ${addClassName}`}>{children}</div>
    );
}
