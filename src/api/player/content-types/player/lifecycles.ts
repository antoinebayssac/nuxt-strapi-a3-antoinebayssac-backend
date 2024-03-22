
import slugify from 'slugify';

export default {
    beforeCreate(event) {
        const { data } = event.params;
        if (data.first_name && data.last_name) {
        data.slug = slugify(`${data.first_name} ${data.last_name}`).toLowerCase();
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data.first_name && data.last_name) {
        data.slug = slugify(`${data.first_name} ${data.last_name}`).toLowerCase();
        }
    }
};
