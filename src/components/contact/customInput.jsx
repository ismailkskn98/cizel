import React from "react";
import { cn } from "@/lib/utils";

const CustomInput = React.forwardRef(({
    label,
    type = "text",
    placeholder,
    error,
    className,
    isTextarea = false,
    ...props
}, ref) => {
    const InputComponent = isTextarea ? "textarea" : "input";

    return (
        <article className={cn("relative flex flex-col items-start gap-2", className)}>
            {label && (
                <label className="text-sm font-medium text-gray-700 block">
                    {label}
                </label>
            )}
            <InputComponent
                ref={ref}
                type={isTextarea ? undefined : type}
                placeholder={placeholder}
                className={cn(
                    "w-full px-2.5 py-2 placeholder:text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400",
                    error && "border-red-500 focus:ring-red-500 focus:border-red-500",
                    isTextarea && "resize-vertical min-h-[100px]"
                )}
                {...props}
            />
            {error && (
                <p className="absolute left-1 bottom-0 translate-y-[120%] text-[8px] xl:text-[10px] text-red-600 mt-1">* {error}</p>
            )}
        </article>
    );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;