export const getStarlinkStatusColor = (status: string) => {
    switch (status.toLocaleLowerCase()) {
      case 'healthy':
      case 'online':
        return '#31B969';
      case 'attention':
        return '#A49027';
      case 'offline':
        return '#767f82';
      default:
        return '#DE1515';
    }
};