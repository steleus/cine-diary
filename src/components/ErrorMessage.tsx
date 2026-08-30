interface ErrorMessageProps {
    message: string;
    onRetry: () => void;
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
        <div>
            <p>{message}</p>
            <button onClick={onRetry}>Tekrar Deneyiniz</button>
        </div>
    );
}

export default ErrorMessage;
