class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |variable|
      define_method(variable) do
        instance_variable_get("@#{variable}")
      end

      define_method("#{variable}=") do |arg|
        instance_variable_set("@#{variable}", arg)
      end
    end
  end
end
