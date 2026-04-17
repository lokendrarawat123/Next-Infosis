import DetailsModal from "./Model";
import { Button } from "./Button";

const FormModal = ({
  show = false,
  onClose,
  onSubmit,
  title,
  size = "md",
  children,
  isSubmitting = false,
  submitText = "Save",
  cancelText = "Cancel",
  loadingText = "Saving...",
  submitVariant = "primary",
  formClassName = "space-y-4",
  footerClassName = "flex justify-end gap-2 pt-2",
}) => {
  return (
    <DetailsModal show={show} onClose={onClose} title={title} size={size}>
      <form onSubmit={onSubmit} className={formClassName}>
        {children}
        <div className={footerClassName}>
          <Button type="button" onClick={onClose} variant="muted">
            {cancelText}
          </Button>
          <Button
            type="submit"
            loading={isSubmitting}
            loadingText={loadingText}
            variant={submitVariant}
          >
            {submitText}
          </Button>
        </div>
      </form>
    </DetailsModal>
  );
};

export default FormModal;
