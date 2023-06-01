import React, { useEffect } from 'react';

const useSetTitle = (title) => {

    useEffect( () => {

        document.title = `${title} - Zoo-Zoom-Toys`;

    }, [title]);

}

export default useSetTitle;