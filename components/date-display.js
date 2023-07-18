import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";

export default function DateDisplay({ date, className }) {
    return (
        <span
            className={className}
            title={format(date, "dd.MM.yyyy - HH:mm")}
        >
            {formatDistance(date, new Date(), { addSuffix: true })}
        </span>
    );
}
