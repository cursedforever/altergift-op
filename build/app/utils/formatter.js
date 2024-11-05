import { DateTime } from 'luxon';
export function formatPrice(price) {
    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    });
    return formatter.format(price);
}
export const computeTimeSince = (dateString) => {
    const date = DateTime.fromISO(dateString);
    let diff = DateTime.now().diff(date, 'days').days;
    if (diff >= 1)
        return `il y a ${diff.toFixed(0)} jours`;
    diff = DateTime.now().diff(date, 'hours').hours;
    if (diff >= 1)
        return `il y a ${diff.toFixed(0)} heures`;
    diff = DateTime.now().diff(date, 'minutes').minutes;
    return `il y a ${diff.toFixed(0)} minutes`;
};
//# sourceMappingURL=formatter.js.map