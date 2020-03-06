import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ArchiveItemEditForm from '../../src/components/forms/archive-item/ArchiveItemEditForm';
import { editArchiveItem } from '../../src/store/archive-items/actionCreators'
import { makeWidget } from '../../src/components/utils/pictureWidget'



const EditMyArchiveItem = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const archiveItem = useSelector(state => state.archiveItems.oneArchiveItem)

  const [widget, setWidget] = useState({})
  const [state, setState] = useState({
    user_id: archiveItem.user_id,
    make: archiveItem.make,
    model: archiveItem.model,
    type_id: archiveItem.type_id,
    serial_num: archiveItem.serial_num,
    price: archiveItem.price,
    description: archiveItem.description
  });
  const [pictures, setPictures] = useState(archiveItem.pictures)
  const [deletedPics, setDeletedPics] = useState([])
  let formattedAI = {}

  useEffect(() => {
    setWidget(makeWidget(setPictures, pictures))
  }, [])

  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const handleSubmit = () => {
    formattedAI = {...state, pictures, deletedPics, user_id: archiveItem.user_id};
    dispatch(editArchiveItem(archiveItem.id, formattedAI))
    router.push('/myarchive')
  }

  const removePic = (pic, id) => {
    pictures.splice(pic, 1);

    setPictures([...pictures]);
    if (id) {
      setDeletedPics([...deletedPics, id])
    }
  };
  
  return (
    <div>
      <ArchiveItemEditForm handleChange={handleChange} state={state} setState={setState} widget={widget} pictures={pictures} setPictures={setPictures} removePic={removePic} handleSubmit={handleSubmit} />
    </div>
  )
}

export default EditMyArchiveItem;