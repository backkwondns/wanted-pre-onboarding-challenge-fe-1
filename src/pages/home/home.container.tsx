import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { toast } from 'react-toastify';
import { authLib, fetchLib } from 'libs';
import { atomsInterface, homeInterface } from 'interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import Home from './home';

function HomeContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const [items, setItems] = useState<atomsInterface.itemType[]>([]);
  const selectedItem = rootStore.todoStore.getSelectedItem;
  const navigate = useNavigate();

  const { paramID } = useParams();

  useEffect(() => {
    fetchLib
      .fetchGet<homeInterface.GetAllResponseInterface>('todos')
      .then((value: homeInterface.GetAllResponseInterface) => setItems([...value.data]));
    if (paramID) {
      fetchLib
        .fetchGet<homeInterface.GetOneResponseInterface>(`todos/${paramID}`)
        .then((value: homeInterface.GetOneResponseInterface) => {
          rootStore.todoStore.setSelectedItem(value.data);
          rootStore.themeStore.setCurrentMode('Old');
          rootStore.themeStore.setOpenShowDetail();
          rootStore.themeStore.setCloseEditMode();
        });
    }
  }, [paramID]);

  const onClickItem = async (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    try {
      const response = await fetchLib.fetchGet<homeInterface.GetOneResponseInterface>(`todos/${id}`);
      const { data } = response;
      rootStore.todoStore.setSelectedItem(data);
      rootStore.themeStore.setCurrentMode('Old');
      rootStore.themeStore.setOpenShowDetail();
      rootStore.themeStore.setCloseEditMode();
      navigate(`/${id}`);
    } catch (error: any) {
      toast.error(error);
    }
  };
  const onClickSave = async () => {
    if (!selectedItem.title || !selectedItem.content) {
      toast.error('입력을 해주세요');
      return;
    }
    const sendForm = { title: selectedItem.title, content: selectedItem.content };
    try {
      if (rootStore.themeStore.getCurrentMode === 'New') {
        const response = await fetchLib.fetchPost<
          homeInterface.SendFormInterface,
          homeInterface.GetOneResponseInterface
        >('todos', sendForm);
        if (response.data) {
          toast.success('등록 완료');
          setItems((prevState) => [...prevState, response.data]);
          rootStore.todoStore.setInitSelectedItem();
          rootStore.themeStore.toggleShowDetail();
          rootStore.themeStore.setCurrentMode('None');
        }
      } else {
        const response = await fetchLib.fetchPut<
          homeInterface.SendFormInterface,
          homeInterface.GetOneResponseInterface
        >(`todos/${selectedItem.id}`, sendForm);
        if (response.data) {
          toast.success('수정 완료');
          fetchLib
            .fetchGet<homeInterface.GetAllResponseInterface>('todos')
            .then((value: homeInterface.GetAllResponseInterface) => setItems([...value.data]));
          rootStore.themeStore.toggleShowDetail();
          rootStore.themeStore.toggleEditMode();
        }
      }
    } catch (error: any) {
      toast.error(error.detail);
    }
  };

  const onClickDelete = () => {
    fetchLib.fetchDelete(`todos/${selectedItem.id}`).then(() => {
      toast.info('삭제 완료');
      rootStore.todoStore.setInitSelectedItem();
      rootStore.themeStore.toggleShowDetail();
      rootStore.themeStore.setCurrentMode('None');
      rootStore.themeStore.setCloseEditMode();
      fetchLib
        .fetchGet<homeInterface.GetAllResponseInterface>('todos')
        .then((value: homeInterface.GetAllResponseInterface) => {
          setItems([...value.data]);
        });
    });
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.currentTarget;
    rootStore.todoStore.setEditSelectedItem(id, value);
  };

  const onClickLogout = () => {
    authLib.removeToken();
    toast.success('로그아웃 완료');
    navigate('/auth');
  };

  return (
    <Home
      items={items}
      selectedItem={selectedItem}
      onClickItem={onClickItem}
      onClickDelete={onClickDelete}
      onClickSave={onClickSave}
      onChangeInput={onChangeInput}
      onClickLogout={onClickLogout}
    />
  );
}

export default observer(HomeContainer);
