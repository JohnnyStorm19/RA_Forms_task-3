export interface IImageItemProps {
    url: string;
    onDelete: (url: string) => void;
}

export interface IFIleListProps {
    images: string[];
    onDelete: (url: string) => void;
}