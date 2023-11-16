import { useRef, useState, useEffect } from "react";
import { ImageList } from "./ImageList";

export function FileInput() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [images, setImages] = useState<(string)[]>([]);

    useEffect(() => {
        console.log('Images:', images); // Актуальное значение images
    }, [images]);


    const onContainerClick = () => {
        inputRef.current?.click();
    }

    const onDeleteClick = (url: string) => {
        setImages([...images].filter(imageUrl => imageUrl != url));
    }

    const handleChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const selectedImages = Array.from(e.target.files);
          const imageURLs = selectedImages.map(image => URL.createObjectURL(image));
          setImages(prevImages => [...prevImages, ...imageURLs]);

          setTimeout(() => {
              imageURLs.forEach(imageURL => URL.revokeObjectURL(imageURL));
          }, 1000)

          e.target.value = '';
        }
      }

    return (
        <>
            <div
                className="input-container"
                onClick={onContainerClick}
            >
                Click to input file
                <input 
                    type="file" 
                    name="fileInput"
                    onChange={handleChangeFileInput} 
                    ref={inputRef}
                    id="file-input" 
                    style={{ display: 'none' }}
                    multiple
                />
            </div>
            {
                images.length > 0 && <ImageList images={images} onDelete={onDeleteClick}/>
            }
        </>
    )
}