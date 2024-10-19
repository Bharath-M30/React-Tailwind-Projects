import SuccessIcon from '@mui/icons-material/CheckCircleSharp';
import WarningIcon from '@mui/icons-material/WarningSharp';
import ErrorIcon from '@mui/icons-material/CancelSharp';
import InfoIcon from '@mui/icons-material/InfoSharp';
import "./Banner.css"

export default function Banner({variant,message,children}) {

    let icon;

    if(variant === "success"){
        icon = <SuccessIcon />
    }else if(variant === "warning"){
        icon = <WarningIcon />
    }else if(variant === "error"){
        icon = <ErrorIcon />
    }else if(variant === "info"){
        icon = <InfoIcon />
    }

    return (
        <div className={`flex gap-4 p-4 ${variant} rounded-md min-w-full`}>
            <div className={`${variant}-icon`}>{icon}</div>
            <div className="flex flex-col">
                <h1 className={`font-bold ${variant}-title ${message ? "mb-4" : ""}`}>{children}</h1>
                {message && <p className={`${variant}-message`}>{message}</p>}
            </div>
        </div>
    )
}