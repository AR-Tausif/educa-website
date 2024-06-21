import { Button } from "../ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const PaymentFieldBox = ({
    form
}:{form:any})=>{
    return (
        <div
              className={`flex gap-x-7 transition-all rounded-md hover:bg-muted border-2 p-4`}
            >
              <div className="flex items-center gap-x-4">
                <div className="self-end mb-2">
                  <Button
                    type="button"
                    className="rounded-full bg-gray-700 w-7 h-7"
                    size="sm"
                  >
                    <p className="text-white text-xs">...</p>
                  </Button>
                </div>
                <div>
                  <FormField
                    key="others"
                    control={form.control}
                    name={"others"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Others</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            className="font-semibold text-green-600"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              form.setValue("others", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="">
                <FormField
                  key={"others"}
                  control={form.control}
                  name={"oth"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due</FormLabel>
                      <FormControl>
                        <Input value="0" disabled />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
    )
}

export default PaymentFieldBox