import { IImageItemProps } from "../models"

export function ImageItem({url, onDelete}: IImageItemProps) {
    return (
        <div 
            className="image-wrapper"
        >
            <img  
                src={url} 
                alt=""
                className="image-item" 
            />
            <span
                className="delete-image"
                onClick={() => onDelete(url)}
            >
                Х
            </span>
        </div>
    )
}