const px2vw = (size: number, width: number = 1244): string => `${(size / width) * 100}vw`;

export default px2vw;