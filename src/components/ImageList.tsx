import { ImageItem } from "./ImageItem";
import { IFIleListProps } from "../models";

export function ImageList({images, onDelete}: IFIleListProps) {
    return (
        <div className="images-container">
            {
                images.map((url:string) =>{
                    return <ImageItem key={url} url={url} onDelete={onDelete}/>
                })
            }
        </div>
    )
}