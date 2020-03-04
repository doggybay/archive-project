import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArchiveItemEditForm from '../../src/components/forms/archive-item/ArchiveItemEditForm';
import { editArchiveItem } from '../../src/store/archive-items/actionCreators'
import { makeWidget } from '../../src/components/utils/pictureWidget'


const EditMyArchiveItem = () => {
  const dispatch = useDispatch();
  const archiveItem = useSelector(state => state.archiveItems.oneArchiveItem)

  const [widget, setWidget] = useState({})
  const [state, setState] = useState({});
  const [pictures, setPictures ] = useState(archiveItem.pictures)
  let formattedAI = {}

  useEffect(() => {
    setWidget(makeWidget(setPictures, pictures))
  }, [])
  console.log('state in edit: ', state)
  console.log("pics in edit: ", pictures)

  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const handleSubmit = () => {
    formattedAI = {...state, pictures};
    console.log('heard', formattedAI)
    //dispatch(editArchiveItem(achriveItem.id, formattedAI))
  }

  const removePic = pic => {
    pictures.splice(pic, 1);

    setPictures([...pictures]);
  };

  return (
    <div>
      <ArchiveItemEditForm handleChange={handleChange} state={state} setState={setState} widget={widget} pictures={pictures} setPictures={setPictures} removePic={removePic} handleSubmit={handleSubmit} />
    </div>
  )
}

export default EditMyArchiveItem;