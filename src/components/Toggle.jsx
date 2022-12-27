const Toggle = ({ ...props }) => {
  return (
    <>
      <label class="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          checked={props.checked}
          onClick={props.onClick}
        />
        <div class="w-11 h-6 bg-grayish-blue rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-grayish-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-strong-cyan"></div>
      </label>
    </>
  );
};

export default Toggle;
