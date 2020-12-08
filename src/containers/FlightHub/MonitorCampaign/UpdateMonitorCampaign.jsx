import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MonitorCampaignForm from './MonitorCampaignForm';
import { convertInitialDataToFieldValues, randomDateTime } from './services';
import { monitorCampaignApi } from '../../../apis';
import { notification } from 'antd';

const UpdateMonitorCampaign = () => {
  const [monitorCampaignData, setMonitorCampaignData] = useState({});
  const params = useParams();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const { id } = params;
    const fetchMonitorCampaignData = async () => {
      try {
        const resp = await monitorCampaignApi.getMonitorCampaign(id);
        setMonitorCampaignData(resp.data);
      } catch (error) {
        notification.error({
          message: 'Có lỗi xảy ra! Xin thử lại',
        });
      }
    };
    fetchMonitorCampaignData();
  }, [params]);

  const updateMonitorCampaign = async (values) => {
    try {
      const { id } = params;
      const dataSubmit = { _id: id, ...values };
      const resp = await monitorCampaignApi.updateMonitorCampaign(dataSubmit);

      notification.success({
        message: 'Cập nhật thành công!',
      });
      goBack();
    } catch (error) {
      notification.error({
        message: 'Có lỗi xảy ra! Xin thử lại',
      });
    }
  };

  return (
    <MonitorCampaignForm
      initialData={convertInitialDataToFieldValues(monitorCampaignData)}
      title="Sửa đợt giám sát"
      handleSubmit={updateMonitorCampaign}
      attachParams={attachParams}
    ></MonitorCampaignForm>
  );
};

export default UpdateMonitorCampaign;
